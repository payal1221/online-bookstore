package com.cjc.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.cjc.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel = "bookCatergory",path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory,Long>{

}
