package toy.project.doubleE;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class defaultController {
    //localhost:8080/
    @GetMapping("")
    public  String home(){
        return "login";
    }
}
