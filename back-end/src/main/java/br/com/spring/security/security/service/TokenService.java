package br.com.spring.security.security.service;

import br.com.spring.security.security.entity.User;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    public String gerarToken(User user) {
        return JWT.create()
                .withIssuer("Vehicles")
                .withSubject(user.getUsername())
                .withClaim("id", user.getId())
                .withExpiresAt(LocalDateTime.now()
                        .plusMinutes(990)
                        .toInstant(ZoneOffset.of("-03:00"))
                ).sign(Algorithm.HMAC256("ASenhaNãoÉ123"));
    }


    public String getSubject(String token) {
        return JWT.require(Algorithm.HMAC256("ASenhaNãoÉ123"))
                .withIssuer("Vehicles")
                .build().verify(token).getSubject();

    }
}
