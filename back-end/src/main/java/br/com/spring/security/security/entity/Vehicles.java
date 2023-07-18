package br.com.spring.security.security.entity;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Base64;
import java.util.Optional;

@Entity(name = "vehicles")
@Table(name = "vehicles")
public class Vehicles {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private Integer year;
    private String brand;
    private String model;
    private Double kilometers;
    private Double price;
    @Column(name = "image", columnDefinition="longblob")
    private byte[] image;
    private String imageType;
    private String state;

    public Vehicles(){}

    public Vehicles(Optional<Vehicles> vehicle) {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public Integer getYear() {
        return year;
    }
    public void setYear(Integer year) {
        this.year = year;
    }
    public Double getKilometers() {
        return kilometers;
    }
    public void setKilometers(Double kilometers) {
        this.kilometers = kilometers;
    }
    public byte[] getImage() {
        return image;
    }
    public void setImage(byte[] imagePath) {
        this.image = imagePath;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public String getBrand() {
        return brand;
    }
    public void setBrand(String brand) {
        this.brand = brand;
    }
    public String getModel() {
        return model;
    }
    public void setModel(String model) {
        this.model = model;
    }

    public String getImageType() {
        return imageType;
    }

    public void setImageType(String imageType) {
        this.imageType = imageType;
    }

}
