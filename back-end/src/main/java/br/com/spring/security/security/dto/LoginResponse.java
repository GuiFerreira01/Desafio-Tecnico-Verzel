package br.com.spring.security.security.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public record LoginResponse(String token, Collection<? extends GrantedAuthority> role) {
}
