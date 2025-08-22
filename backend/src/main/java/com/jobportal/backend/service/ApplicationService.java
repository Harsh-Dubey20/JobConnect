package com.jobportal.backend.service;

import com.jobportal.backend.model.Application;
import com.jobportal.backend.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public Application applyForJob(Application application) {
        return applicationRepository.save(application);
    }
}
