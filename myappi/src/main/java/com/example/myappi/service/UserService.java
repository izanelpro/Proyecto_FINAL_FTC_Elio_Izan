package com.example.myappi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.myappi.domain.User;

public interface UserService {

    User getUser(Long Id);
    User setUser(User entity);
    List<User> getUsers();
    
}