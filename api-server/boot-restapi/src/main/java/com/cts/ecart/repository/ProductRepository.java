package com.cts.ecart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.cts.ecart.entity.Product;

@Transactional(isolation = Isolation.READ_COMMITTED,propagation = Propagation. REQUIRED)
public interface ProductRepository extends JpaRepository<Product, Integer>{}
