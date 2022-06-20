package com.primat.familly_tree_back.adapters.controller;

import com.primat.familly_tree_back.usecase.register.IRegisterInput;
import com.primat.familly_tree_back.usecase.requestModels.UserRequestModel;
import com.primat.familly_tree_back.usecase.responseModel.UserResponseModel;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UserRegisterController {

    final IRegisterInput userInput;

    UserRegisterController(IRegisterInput accountGateway) {
        this.userInput = accountGateway;
    }

    @PostMapping("/user")
    UserResponseModel create(@RequestBody UserRequestModel requestModel) {
        return this.userInput.create(requestModel);
    }
}
