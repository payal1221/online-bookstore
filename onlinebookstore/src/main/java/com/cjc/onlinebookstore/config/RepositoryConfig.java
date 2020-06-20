package com.cjc.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.cjc.onlinebookstore.entity.Book;
import com.cjc.onlinebookstore.entity.BookCategory;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {
	
	//Customize  method for exposing id in response 
	/*
	 * @Override public void
	 * configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
	 * config.exposeIdsFor(Book.class); config.exposeIdsFor(BookCategory.class);
	 * 
	 * }
	 */
	
	//alternative approach to expose id automatically we can use entityMAnager. This is preffered way
	@Autowired
	private EntityManager entityManager;
	
	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		
		config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream()
				.map(Type::getJavaType)
				.toArray(Class[]::new));
		
	}

}
 