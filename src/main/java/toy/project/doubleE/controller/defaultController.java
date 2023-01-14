package toy.project.doubleE.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import toy.project.doubleE.service.MemberService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
@Slf4j
@Controller
public class defaultController {
    //localhost:8080/main
    @Autowired
    private MemberService memberserive;

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
        return "main";
    }




    @PostMapping("/main") //받는애 Post방식으로
    @ResponseBody
    public String postMain(){return "main";}

    @GetMapping("/ajax")
    public String ajax(){
        return "ajax";
    }


    @PostMapping("/postAjax")
    @ResponseBody
    public String postAjax(@RequestParam String name,  @RequestParam String age){
        System.out.println("name="+name);
        System.out.println("age="+age);

        return "postAjax response";
    }
//
    @GetMapping("/getAjax/{name}")
    @ResponseBody
    public String ajax1(
            @PathVariable String name
    ){
        return "getAjax response"+name;
    }

    @GetMapping("/memberJoin")  // 회원가입창 이동
    public String join(){
        return "memberJoin";
    }

    @PostMapping("memberJoin")
    @ResponseBody
    public String joinRequest(
            @RequestParam String name,
            @RequestParam String age ,
            @RequestParam String id,
            @RequestParam String password){

        return memberserive.joinCheck(name,age,id,password);
    }


}
