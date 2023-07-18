package br.com.spring.security.security.controller;

import br.com.spring.security.security.dto.Login;
import br.com.spring.security.security.dto.LoginResponse;
import br.com.spring.security.security.dto.UserRegister;
import br.com.spring.security.security.entity.User;
import br.com.spring.security.security.repository.UserRepository;
import br.com.spring.security.security.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;



@RestController
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository repository;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody Login data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var authenticatedUser = (User) auth.getPrincipal();
        var userRole = auth.getAuthorities();

        String userToken = tokenService.gerarToken(authenticatedUser);

        LoginResponse response = new LoginResponse(userToken, userRole);

        return ResponseEntity.ok()
                .body(response);
    }



    @PostMapping("/register")
    public ResponseEntity<Object> register(@RequestBody UserRegister data) {
        System.out.println(data);
        if(this.repository.findByLogin(data.username()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.username(), encryptedPassword, data.role());

        this.repository.save(newUser);

        return ResponseEntity.ok().build();
    }
}