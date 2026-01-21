package net.guides.springboot2.net.guides.springboot2.controller;

import java.util.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import net.guides.springboot2.net.guides.springboot2.exception.ResourceNotFoundException;
import net.guides.springboot2.net.guides.springboot2.model.Account;
import net.guides.springboot2.net.guides.springboot2.repository.AccountRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class AccountController {

  private final AccountRepository repo;

  public AccountController(AccountRepository repo) {
    this.repo = repo;
  }

  @GetMapping("/accounts")
  public List<Account> getAll() {
    return repo.findAll();
  }

  @GetMapping("/accounts/{id}")
  public ResponseEntity<Account> getById(@PathVariable String id) {
    Account acc = repo.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Account not found: " + id));
    return ResponseEntity.ok(acc);
  }

  @PostMapping("/accounts")
  public Account create(@RequestBody Account account) {
    account.setId(null); // laisser Mongo générer l'id
    return repo.save(account);
  }

  @PutMapping("/accounts/{id}")
  public ResponseEntity<Account> update(@PathVariable String id, @RequestBody Account details) {
    Account acc = repo.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Account not found: " + id));

    acc.setFirstName(details.getFirstName());
    acc.setLastName(details.getLastName());
    acc.setCin(details.getCin());
    acc.setAccountNumber(details.getAccountNumber());
    acc.setAgency(details.getAgency());
    acc.setAmount(details.getAmount());

    return ResponseEntity.ok(repo.save(acc));
  }

  @DeleteMapping("/accounts/{id}")
  public Map<String, Boolean> delete(@PathVariable String id) {
    Account acc = repo.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Account not found: " + id));

    repo.delete(acc);
    return Map.of("deleted", true);
  }
}
