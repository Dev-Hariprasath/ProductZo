package com.productzo.productzo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Data
@Table(name = "Product")
@NoArgsConstructor
@AllArgsConstructor
public class Product {

    @Id
    @Column(name = "prd_id" )
    private Integer prdId;

    @Column(name = "product_name" )
    private String productName;

    @Column(name = "product_description" )
    private String productDescription;

    @Column(name = "product_rating" )
    private int productRating;

    @Column(name = "product_image_url")
    private String productImageUrl;

    @Column(name = "prd_price" )
    private int prdPrice;

    @Column(name = "product_brand" )
    private String productBrand;

    @Column(name = "product_category" )
    private String productCategory;

    @Column(name = "product_available" )
    private boolean productAvailable;

    @Column(name = "product_quantity" )
    private int productQuantity;
}
