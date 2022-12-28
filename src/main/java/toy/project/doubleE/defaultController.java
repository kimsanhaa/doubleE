package toy.project.doubleE;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Controller
public class defaultController {
    //localhost:8080/main
    @GetMapping("")
    public  String home(){

        return "login";
    }


    //localhost:8080/main
    @GetMapping("/main") //받는애 get방식으로
    public String main(Model model){
        Map<String,String> temp = new HashMap<>();
        ArrayList data = new ArrayList();
        temp.put("name","kimsanha");
        temp.put("age","1");
        data.add(temp);
        temp = new HashMap<>();
        temp.put("name","dsgsdg");
        temp.put("age","3");
        data.add(temp);

        temp = new HashMap<>();
        temp.put("name","fhfhfh");
        temp.put("age","5");
        data.add(temp);

        temp = new HashMap<>();
        temp.put("name","mbkbkb");
        temp.put("age","42");
        data.add(temp);


        System.out.println(data);
        model.addAttribute("data",data);
        return "main";}




    @PostMapping("/main") //받는애 Post방식으로
    @ResponseBody
    public String postMain(){return "main";}
}
