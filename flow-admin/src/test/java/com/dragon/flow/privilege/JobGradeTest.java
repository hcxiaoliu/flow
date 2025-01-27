package com.dragon.flow.privilege;

import com.dragon.flow.main.FlowAdminApplication;
import com.dragon.flow.model.base.Area;
import com.dragon.flow.model.org.JobGrade;
import com.dragon.flow.service.base.IAreaService;
import com.dragon.flow.service.org.IJobGradeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @program: flow
 * @description:
 * @author: Bruce.Liu
 * @create: 2021-04-28 20:58
 **/
@RunWith(SpringRunner.class)
@SpringBootTest(classes = FlowAdminApplication.class)
public class JobGradeTest {

    @Autowired
    private IJobGradeService jobGradeService;
    @Autowired
    private IAreaService areaService;

    @Test
    public void testJobGradeById() {
        JobGrade grade = jobGradeService.getById("001");
        System.out.println(grade);
    }

    @Test
    public void testAreaById() {
        Area area = areaService.getById("110000");
        System.out.println(area);
    }
}
