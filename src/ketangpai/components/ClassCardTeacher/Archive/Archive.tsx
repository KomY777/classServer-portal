import React from "react";
import {Button, Modal} from "antd";
import {Ketangpai_COURSE_ARCHIVEALL, Ketangpai_COURSE_ARCHIVEME} from "../../../../api/ketangpai/CourseManagement";

interface Props {
    openArchive: boolean
    setOpenArchive: any;
    id:string;
}


export default (
    {
        openArchive,
        setOpenArchive,
        id,
    }:Props
) => {


    const handleCancel = () => {
        setOpenArchive(false);
    };

    const ArchiveMe = ()=>{
        Ketangpai_COURSE_ARCHIVEME(id).then(req=>{
            console.log(req)
        })
    }
    const ArchiveAll = ()=>{
        Ketangpai_COURSE_ARCHIVEALL(id).then(req=>{
            console.log(req)
        })
    }
    return (
        <Modal
            onCancel={handleCancel}
            title="归档课程"
            open={openArchive}
            footer={null}
            destroyOnClose={true}
            // cancelText="a"
            centered={true}
        >
            <Button
                style={{
                    width:"200px",
                    right:"left",
                    marginLeft:"20px"
                }}
                type="primary"
                onClick={ArchiveMe}
            >
                归档自己
            </Button>
            <Button
                style={{
                    width:"200px",
                    marginRight:"20px",
                    float:"right"
                }}
                type="primary"
                onClick={ArchiveAll}
            >
                归档全部
            </Button>
        </Modal>
    )
}