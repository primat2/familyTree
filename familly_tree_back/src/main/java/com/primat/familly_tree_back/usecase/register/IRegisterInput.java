package com.primat.familly_tree_back.usecase.register;


import com.primat.familly_tree_back.usecase.requestModels.UserRequestModel;
import com.primat.familly_tree_back.usecase.responseModel.UserResponseModel;

public interface IRegisterInput {
    UserResponseModel create(UserRequestModel requestModel);
}
