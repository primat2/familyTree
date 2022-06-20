package com.primat.familly_tree_back.usecase.register;

import com.primat.familly_tree_back.entity.IUser;
import com.primat.familly_tree_back.entity.IUserFactory;
import com.primat.familly_tree_back.usecase.responseModel.RegisterDBSaveModel;
import com.primat.familly_tree_back.usecase.requestModels.UserRequestModel;
import com.primat.familly_tree_back.usecase.responseModel.UserResponseModel;


import java.time.LocalDateTime;


class RegisterInteractor implements IRegisterInput {

    final IRegisterSaveDataOutput saveDataOutput;
    final IRegisterPresentDataOutput userPresenter;
    final IUserFactory userFactory;

    RegisterInteractor(IRegisterSaveDataOutput userRegisterDfGateway, IRegisterPresentDataOutput userPresenter,
                       IUserFactory userFactory) {
        this.saveDataOutput = userRegisterDfGateway;
        this.userPresenter = userPresenter;
        this.userFactory = userFactory;
    }

    @Override
    public UserResponseModel create(UserRequestModel requestModel) {
        if (saveDataOutput.existsByName(requestModel.getName())) {
            return userPresenter.prepareFailView("User already exists.");
        }
        IUser user = userFactory.create(requestModel.getName(), requestModel.getPassword());
        if (!user.passwordIsValid()) {
            return userPresenter.prepareFailView("User password must have more than 5 characters.");
        }
        LocalDateTime now = LocalDateTime.now();

        saveDataOutput.save(
                new RegisterDBSaveModel(
                        user.getName(),
                        user.getPassword(),
                        now)
        );

        return userPresenter.prepareSuccessView(
                new UserResponseModel(
                        user.getName(),
                        now.toString())
        );
    }
}