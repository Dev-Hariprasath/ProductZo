package com.productzo.productzo.Controller;

import com.productzo.productzo.Model.Product;
import com.productzo.productzo.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/productzo")
public class ProductController {

    @Autowired
    ProductService service;

    @GetMapping("/api/products/{PrdId}")
    public ResponseEntity<Product> getProduct(@PathVariable int PrdId){
        Product product = service.getProduct(PrdId);
        if(product != null)
            return new ResponseEntity<>(product, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/api/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }

    @PostMapping("/api/addProduct")
    public void addProduct(@RequestBody Product Prd){
        service.addProduct(Prd);
    }

    @PutMapping("/updateProduct")
    public ResponseEntity<String> updateProduct(@RequestBody Product prd) {
        boolean updated = service.updateProduct(prd);
        if (updated) {
            return ResponseEntity.ok("Product updated successfully.");
        } else {
            return ResponseEntity.status(404).body("Product not found.");
        }
    }

    @DeleteMapping("/api/delete/{PrdId}")
    public void deleteProduct(@PathVariable int PrdId){
        service.deleteProduct(PrdId);
    }

}
