package com.fm.dayonepractice.controller;

import com.fm.dayonepractice.model.ToDo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.fm.dayonepractice.repository.ToDoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author: Christian Francis
 * @email: cnfrancis54@gmail.com
 * @date: 10/22/2021
 * @description: *Enter project description here*
 */


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoController {
    
    @Autowired
    ToDoRepository toDoRepository;

    @PostMapping("/toDo")
    public HttpStatus addToDo(@RequestBody ToDo toDo) {
        toDoRepository.save(new ToDo(toDo.getTask()));
        return HttpStatus.CREATED;
    }
    
    @GetMapping("/toDo")
    public Iterable<ToDo> getToDos() {
        return toDoRepository.findAll();
    }
    
    @GetMapping("/toDo/{id}")
    public ToDo getToDo(@PathVariable("id") long id) {
        return toDoRepository.findById(id).get();
    }
    
    @DeleteMapping("/toDo/{id}")
    public HttpStatus deleteToDo(@PathVariable("id") long id) {
        toDoRepository.deleteById(id);

        return HttpStatus.OK;
    }
}
