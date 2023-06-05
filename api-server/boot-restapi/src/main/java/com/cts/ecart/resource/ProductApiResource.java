package com.cts.ecart.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.ecart.entity.Product;
import com.cts.ecart.repository.ProductRepository;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductApiResource {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping
	public List<Product> listAll() {
		return productRepository.findAll();
	}
	
	@GetMapping("/{productId}")
	public Product findById(@PathVariable() int productId) {
		return productRepository.findById(productId).orElse(null);
	}
	
	
	
	
	
	
}
