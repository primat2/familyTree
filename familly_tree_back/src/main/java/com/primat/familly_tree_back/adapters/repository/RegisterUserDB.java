package com.primat.familly_tree_back.adapters.repository;


import com.primat.familly_tree_back.usecase.register.IRegisterSaveDataOutput;
import com.primat.familly_tree_back.usecase.responseModel.RegisterDBSaveModel;

class RegisterUserDB implements IRegisterSaveDataOutput {

    final JpaUserRepository repository;

    RegisterUserDB(JpaUserRepository repository) {
        this.repository = repository;
    }

    @Override
    public boolean existsByName(String name) {
        return repository.existsById(name);
    }

    @Override
    public void save(RegisterDBSaveModel requestModel) {
        UserDataMapper accountDataMapper = new UserDataMapper(requestModel.getName(), requestModel.getPassword(), requestModel.getCreationTime());
        repository.save(accountDataMapper);
    }
}
