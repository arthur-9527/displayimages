import type { NextPage } from 'next'
import Image from "next/image";
import {useState} from "react";
import {Card, Col, Row} from "antd";


const Home: NextPage = () => {
    const displayImage = () => {
        const cacheList:any[] = []
        for(let i=0;i<120;i++){
            const imgUrl = `https://hostname9527.oss-cn-beijing.aliyuncs.com/img/GoldenSand_IMG/${i}.png`
            cacheList.push(
                <Col span={4} key={i} style={{marginTop:'2rem'}}>
                    <Card
                        hoverable
                        style={{ width: 320 }}
                        cover={<img src={imgUrl} />}
                    >
                        {i}.png
                    </Card>
                </Col>
            )
        }
        return cacheList;
    }
  return (
      <div className="site-card-wrapper" >
          <Row gutter={16}>
              {displayImage()}
          </Row>
      </div>
  )
}

export default Home
