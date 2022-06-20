package com.primat.familly_tree_back.usecase.register;

import com.primat.familly_tree_back.usecase.responseModel.UserResponseModel;

public interface IRegisterPresentDataOutput {
    UserResponseModel prepareSuccessView(UserResponseModel user);

    UserResponseModel prepareFailView(String error);
}
