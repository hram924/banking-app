package com.tsb.bank.controller;

import com.tsb.bank.model.Transaction;
import com.tsb.bank.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/banking")
public class BankingController {

    private final TransactionService transactionService;

    @Autowired
    public BankingController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/transactions")
    public List<Transaction> getAllTransactions() {
        return transactionService.findAll();
    }

    @GetMapping("/transactions/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Long id) {
        Transaction transaction = transactionService.findById(id);
        if (transaction != null) {
            return ResponseEntity.ok(transaction);
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/transactions")
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        return transactionService.save(transaction);
    }

    @DeleteMapping("/transactions/{id}")
    public ResponseEntity<Void> deleteTransaction(@PathVariable Long id) {
        transactionService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
