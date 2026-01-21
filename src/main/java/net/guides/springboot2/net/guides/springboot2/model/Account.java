package net.guides.springboot2.net.guides.springboot2.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "accounts")
public class Account {

  @Id
  private String id;

  private String firstName;
  private String lastName;
  private String cin;
  private String accountNumber;
  private String agency;
  private long amount;

  public Account() {}

  public String getId() { return id; }
  public void setId(String id) { this.id = id; }

  public String getFirstName() { return firstName; }
  public void setFirstName(String firstName) { this.firstName = firstName; }

  public String getLastName() { return lastName; }
  public void setLastName(String lastName) { this.lastName = lastName; }

  public String getCin() { return cin; }
  public void setCin(String cin) { this.cin = cin; }

  public String getAccountNumber() { return accountNumber; }
  public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }

  public String getAgency() { return agency; }
  public void setAgency(String agency) { this.agency = agency; }

  public long getAmount() { return amount; }
  public void setAmount(long amount) { this.amount = amount; }
}
