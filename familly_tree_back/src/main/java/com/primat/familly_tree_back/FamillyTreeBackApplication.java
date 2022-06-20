package com.primat.familly_tree_back;

import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.support.BeanDefinitionRegistry;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.context.AnnotationConfigServletWebServerApplicationContext;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ClassPathBeanDefinitionScanner;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.core.type.filter.TypeFilter;

@SpringBootApplication
public class FamillyTreeBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(FamillyTreeBackApplication.class, args);
    }


    // *** Clean architecture ****
    @Bean
    BeanFactoryPostProcessor beanFactoryPostProcessor(ApplicationContext beanRegistry) {
        final var factory = ((AnnotationConfigServletWebServerApplicationContext) beanRegistry).getBeanFactory();
        return beanFactory -> {
            genericApplicationContext((BeanDefinitionRegistry) factory);
        };
    }

    void genericApplicationContext(BeanDefinitionRegistry beanRegistry) {
        var beanDefinitionScanner = new ClassPathBeanDefinitionScanner(beanRegistry);
        beanDefinitionScanner.addIncludeFilter(removeModelAndEntitiesFilter());
        beanDefinitionScanner.scan("com.example.spring_auth_learn");
    }

    static TypeFilter removeModelAndEntitiesFilter() {
        return (MetadataReader mr, MetadataReaderFactory mrf) -> !mr.getClassMetadata()
                .getClassName()
                .endsWith("Model");
    }
}
