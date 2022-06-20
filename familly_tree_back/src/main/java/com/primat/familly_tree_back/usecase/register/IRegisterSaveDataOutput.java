package com.primat.familly_tree_back.usecase.register;

import com.primat.familly_tree_back.usecase.responseModel.RegisterDBSaveModel;


public interface IRegisterSaveDataOutput {
    boolean existsByName(String identifier);

    void save(RegisterDBSaveModel requestModel);
}
