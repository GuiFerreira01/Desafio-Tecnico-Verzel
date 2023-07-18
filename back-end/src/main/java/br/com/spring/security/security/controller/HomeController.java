package br.com.spring.security.security.controller;

import br.com.spring.security.security.entity.User;
import br.com.spring.security.security.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    private UserRepository repository;

    @CrossOrigin(origins = "*")
    @GetMapping("/home")
    public User getHome(){
        return repository.findByLogin("Teste do teste");
    }

}
