package br.com.spring.security.security.repository;

import br.com.spring.security.security.entity.Vehicles;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends CrudRepository<Vehicles, Long> {

}
