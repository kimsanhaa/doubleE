package toy.project.doubleE.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/Enrolment")
public class EnrolmentController {

    @GetMapping()
    public String EnrolmentPage(){
        return "Enrolment";
    }


}
