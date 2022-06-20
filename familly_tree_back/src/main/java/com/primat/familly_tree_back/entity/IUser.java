package com.primat.familly_tree_back.entity;



public interface IUser {
    boolean passwordIsValid();

    String getName();

    String getPassword();
}
