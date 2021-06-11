package com.dragon.flow.service.hr.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dragon.flow.mapper.hr.ILeaveMapper;
import com.dragon.flow.mapper.hr.ProjectStartMapper;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.model.hr.ProjectStart;
import com.dragon.flow.service.hr.ILeaveService;
import com.dragon.flow.service.hr.ProjectStartService;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * <p>
 * 服务实现类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-28
 */
@Service(value = "projectStartService")
public class ProjectStartServiceImpl extends ServiceImpl<ProjectStartMapper, ProjectStart> implements ProjectStartService {

//    @Override
//    public void sendMessage(List<String> userCodes) {
//        System.out.println(userCodes.toString());
//    }

    @Override
    public void saveProject(ProjectStart project) {
        project.setCreateTime(new Date());
        this.save(project);
    }

//    @Override
//    public Leave getLeaveById(String id) {
//        return this.getById(id);
//    }
//
//    @Override
//    public Leave getLeaveByProcessInstanceId(String processInstanceId) {
//        LambdaQueryWrapper<Leave> leaveLambdaQueryWrapper = new LambdaQueryWrapper<>();
//        leaveLambdaQueryWrapper.eq(Leave::getProcessInstanceId, processInstanceId);
//        return this.getOne(leaveLambdaQueryWrapper);
//    }
}
