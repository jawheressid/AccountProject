package net.guides.springboot2.net.guides.springboot2.exception;

public class ResourceNotFoundException extends RuntimeException {
  public ResourceNotFoundException(String msg) { super(msg); }
}
