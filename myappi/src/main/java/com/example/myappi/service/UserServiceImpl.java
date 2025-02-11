package com.example.myappi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myappi.domain.User;
import com.example.myappi.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUser(Long Id) {
        User user = userRepository.findById(Id).orElse(null);
        return user;
    }

    @Override
    public User setUser(User entity) {
        User user = userRepository.save(entity);
        return user;
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }
}
