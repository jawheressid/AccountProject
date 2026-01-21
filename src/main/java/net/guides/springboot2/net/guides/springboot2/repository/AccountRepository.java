package net.guides.springboot2.net.guides.springboot2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import net.guides.springboot2.net.guides.springboot2.model.Account;

public interface AccountRepository extends MongoRepository<Account, String> {}
