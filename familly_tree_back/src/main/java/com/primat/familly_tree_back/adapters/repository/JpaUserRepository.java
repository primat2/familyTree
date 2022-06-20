package com.primat.familly_tree_back.adapters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface JpaUserRepository extends JpaRepository<UserDataMapper, String> {
}
