package br.com.spring.security.security.dto;

import br.com.spring.security.security.entity.UserRole;

public record UserRegister(String username, String password, UserRole role)  {
}
