package com.productzo.productzo.Service;

import com.productzo.productzo.Model.Product;
import com.productzo.productzo.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    ProductRepo repo;

    public void addProduct(Product prd){
        repo.save(prd);
    }

    public void deleteProduct(int PrdId){
        repo.deleteById(PrdId);
    }
    public List<Product> getAllProducts(){
        return repo.findAll();
    }

    public boolean updateProduct(Product prd) {
        if (repo.existsById(prd.getPrdId())) {
            repo.save(prd);  // Update existing product
            return true;
        } else {
            return false;  // Product not found
        }
    }
    public Product getProduct(int prdId) {
        return repo.findById(prdId).orElse(new Product());
    }
}
