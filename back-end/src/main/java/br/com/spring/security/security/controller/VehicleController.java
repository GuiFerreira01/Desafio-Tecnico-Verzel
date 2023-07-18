package br.com.spring.security.security.controller;

import br.com.spring.security.security.entity.Vehicles;
import br.com.spring.security.security.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.security.RolesAllowed;
import java.io.IOException;
import java.sql.Blob;
import java.util.List;
import java.util.Optional;

@RestController
public class VehicleController {

    private static String imagePath = "/home/ferreirinha/Documents/Image/";

    @Autowired
    private VehicleRepository vehicleRepository;

    @PostMapping("/vehicle")
    @RolesAllowed("ADMIN")
    public ResponseEntity saveProduct(
            @RequestParam(value = "file", required = false) MultipartFile foto,
            @RequestParam("name") String name,
            @RequestParam("brand") String brand,
            @RequestParam("model") String model,
            @RequestParam("year") Integer year,
            @RequestParam("state") String state,
            @RequestParam("kilometers") Double kilometers,
            @RequestParam("price") Double price
    ) throws IOException {
        byte[] bytes = foto.getBytes();
        System.out.print(foto.getContentType());

        Vehicles newVehicle = new Vehicles();

        newVehicle.setName(name);
        newVehicle.setBrand(brand);
        newVehicle.setModel(model);
        newVehicle.setYear(year);
        newVehicle.setKilometers(kilometers);
        newVehicle.setImage(bytes);
        newVehicle.setPrice(price);
        newVehicle.setState(state);

        this.vehicleRepository.save(newVehicle);
        return ResponseEntity.ok("tudo certo");
    }

    @GetMapping("/listVehicles")
    public List<Vehicles> getProducts(){
       return (List<Vehicles>) vehicleRepository.findAll();
    }

    @DeleteMapping("/vehicle/{id}")
    @RolesAllowed("ADMIN")
    public void delete(@PathVariable Long id){
        System.out.println(id);
        this.vehicleRepository.deleteById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/vehicle/{id}")
    @RolesAllowed("ADMIN")
    public Optional<Vehicles> getVehicleById(@PathVariable Long id){
        System.out.println(id);
        return this.vehicleRepository.findById(id);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PatchMapping("/vehicle/{id}")
    @RolesAllowed("ADMIN")
    public ResponseEntity editVehicle(
            @RequestParam(value = "file", required = false) MultipartFile foto,
            @RequestParam("id") Long id,
            @RequestParam("name") String name,
            @RequestParam("brand") String brand,
            @RequestParam("model") String model,
            @RequestParam("year") Integer year,
            @RequestParam("state") String state,
            @RequestParam("kilometers") Double kilometers,
            @RequestParam("price") Double price
    ) throws IOException {

        Optional<Vehicles> dbVehicle = vehicleRepository.findById(id);

        Vehicles vehicle = dbVehicle.get();

        if(foto != null) {
            //System.out.println("Tem");
            vehicle.setImage(foto.getBytes());
        }

        vehicle.setId(id);
        vehicle.setName(name);
        vehicle.setBrand(brand);
        vehicle.setModel(model);
        vehicle.setYear(year);
        vehicle.setKilometers(kilometers);
        vehicle.setPrice(price);
        vehicle.setState(state);

        this.vehicleRepository.save(vehicle);

        return ResponseEntity.ok("tudo certo");
    }

}
