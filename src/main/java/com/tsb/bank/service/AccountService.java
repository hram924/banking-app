package com.tsb.bank.service;

import com.tsb.bank.model.Account;
import com.tsb.bank.repository.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    private final AccountRepository accountRepository;

    @Autowired
    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Account getAccountById(Long id) {
        return accountRepository.findById(id).orElse(null);
    }

    public Account updateAccount(Long id, Account account) {
        if (accountRepository.existsById(id)) {
            account.setId(id);
            return accountRepository.save(account);
        }
        return null;
    }

    public void deleteAccount(Long id) {
        accountRepository.deleteById(id);
    }
}
