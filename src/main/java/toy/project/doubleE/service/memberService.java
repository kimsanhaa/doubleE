package toy.project.doubleE.service;

import org.springframework.stereotype.Service;
import toy.project.doubleE.dto.memberDto;

import java.util.HashMap;
import java.util.Map;

@Service
public class memberService {



    public String joinCheck(String name, String age, String id, String password){
        memberDto user = new memberDto();
        user.setName(name);
        user.setAge(age);
        user.setId(id);
        user.setPassword(password);
        return "success";
    }
}
