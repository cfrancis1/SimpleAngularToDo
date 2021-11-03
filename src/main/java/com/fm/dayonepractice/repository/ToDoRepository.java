package com.fm.dayonepractice.repository;

import com.fm.dayonepractice.model.ToDo;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author: Christian Francis
 * @email: cnfrancis54@gmail.com
 * @date: 10/22/2021
 * @description: *Enter project description here*
 */


public interface ToDoRepository extends JpaRepository<ToDo, Long>{
    
}