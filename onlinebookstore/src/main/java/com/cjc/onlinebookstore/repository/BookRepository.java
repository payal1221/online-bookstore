package com.cjc.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.cjc.onlinebookstore.entity.Book;


public interface BookRepository extends JpaRepository<Book, Long>{

}
