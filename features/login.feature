@digital-skola @login
Feature: Swag Labs - Login
Background: User already on login page
    Given User on the login page

  @positive
  Scenario Outline: As a "standard_user", I want to log in successfully
    When User login with "standard_user" credential
    Then User successfully login and redirect to home page

  Scenario Outline: As a "problem_user", I want to log in successfully
    When User login with "problem_user" credential
    Then User successfully login and redirect to home page

  Scenario Outline: As a "performance_glitch_user", I want to log in successfully
    When User login with "performance_glitch_user" credential
    Then User successfully login and redirect to home page
  
  Scenario Outline: As a "error_user", I want to log in successfully
    When User login with "error_user" credential
    Then User successfully login and redirect to home page

  Scenario Outline: As a "visual_user", I want to log in successfully
    When User login with "visual_user" credential
    Then User successfully login and redirect to home page

  @negative
  Scenario Outline: As a "locked_out_user", User cannot log in into the home page and see message error
    When User login with "locked_out_user" credential
    Then User not successful login and see error "Epic sadface: Sorry, this user has been locked out." 

  Scenario Outline: As a "another_user", User cannot log in into the home page and see message error
    When User login with "another_user" credential
    Then User not successful login and see error "Epic sadface: Username and password do not match any user in this service"
  
  Scenario Outline: As a "" blank user, User cannot log in into the home page and see message error
    When User login with "" credential
    Then User not successful login and see error "Epic sadface: Username is required"

  Scenario Outline: As a "standard_user" but the password is blank, User cannot log in into the home page and see message error
    When User login with "standard_user" credential and blank password
    Then User not successful login and see error "Epic sadface: Password is required"
    
  