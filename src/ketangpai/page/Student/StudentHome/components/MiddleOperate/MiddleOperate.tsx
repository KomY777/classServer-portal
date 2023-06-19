import React, {useState} from "react";
import {Wrapper} from "./styled";
import {Button} from "antd";
import ArchiveManagement from "./components/ArchiveManagement";


export default () => {

    const [openArchive, setOpenArchive] = useState<boolean>(false)


    return (
        <Wrapper>
            <Button
                className="MyStudy"
            >
                我学的
            </Button>
            <Button
                className="ButtonGuidang"
                onClick={() => {
                    setOpenArchive(true)
                }}
            >归档管理</Button>
            <div></div>
            <ArchiveManagement
                openArchive={openArchive}
                setOpenArchive={setOpenArchive}
            />
        </Wrapper>
    )
}