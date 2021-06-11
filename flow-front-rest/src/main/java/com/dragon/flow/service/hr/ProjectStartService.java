package com.dragon.flow.service.hr;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dragon.flow.model.hr.Leave;
import com.dragon.flow.model.hr.ProjectStart;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author bruce.liu
 * @since 2021-04-28
 */
public interface ProjectStartService extends IService<ProjectStart> {

    //void sendMessage(List<String> userCodes) ;
    /**
     * 添加请假
     * @param project 项目信息
     */
    void saveProject(ProjectStart project) ;

//    /**
//     * 通过id查询请假
//     * @param id id
//     * @return
//     */
//    Leave getLeaveById(String id) ;
//
//    /**
//     * 通过流程实例id获取请假
//     * @param processInstanceId 流程实例id
//     * @return
//     */
//    Leave getLeaveByProcessInstanceId(String processInstanceId) ;
}
