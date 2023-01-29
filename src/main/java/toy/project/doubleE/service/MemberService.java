package toy.project.doubleE.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import toy.project.doubleE.dto.memberDto;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@Service
public class MemberService {

    @Autowired
    HttpSession session;
    ArrayList<memberDto> userList = new ArrayList<>();


    public String joinCheck(String name, String age, String id, String password){
        memberDto user = new memberDto();
        user.setName(name);
        user.setAge(age);
        user.setId(id);
        user.setPassword(password);
        userList.add(user);
        return "success";
    }

    public String loginCheck(String id, String password){

        for(int i=0; i< userList.size(); i++){

        if(userList.get(i).getId().equals(id)){
          if(userList.get(i).getPassword().equals(password)){
              session.setAttribute("user",userList.get(i).getName());

              System.out.println(session.getAttribute("user"));
            return "ok";
             } return "false";
          }
        }
        return "false";
    }

}
