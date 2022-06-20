package com.primat.familly_tree_back.entity;


class CommonIUserFactory implements IUserFactory {
    @Override
    public IUser create(String name, String password) {
        return new CommonIUser(name, password);
    }
}
