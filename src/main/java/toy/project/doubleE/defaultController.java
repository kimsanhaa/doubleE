package toy.project.doubleE;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class defaultController {
    //localhost:8080/main
    @GetMapping("")
    public  String home(){

        return "login";
    }


    //localhost:8080/main
    @GetMapping("/main") //받는애 get방식으로
    public String main(){return "main";}




    @PostMapping("/main") //받는애 Post방식으로
    @ResponseBody
    public String postMain(){return "main";}
}
