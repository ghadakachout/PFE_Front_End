import React  from 'react';
import './Campanie.css';
import { Layout, PageHeader, Space, Table, Popover, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import 'ant-design-pro/dist/ant-design-pro.css';
import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
import PopupModifier from './PopupModifier';
import PopupAjout from './PopupAjout';
import { useSelector } from 'react-redux';

const { Content } = Layout
const columns = [
  {
    title: 'Libelle',
    dataIndex: 'title',
  },
  {
    title: 'Address',
    dataIndex: 'adress',
  },
  {
    title: 'Num_Télé',
    dataIndex: 'tel',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Fax',
    dataIndex: 'fax',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="large">
        <Popover content={PopupModifier} trigger="click">
          <EditOutlined style={{ color: "black" }} /></Popover>
        <Popconfirm title="Voulez-vous Supprimer ?" >
          <DeleteOutlined style={{ color: "red" }} />
        </Popconfirm>
      </Space>
    ),
  },
]; 

const Campagnie = () => {
  const campagnies = useSelector(state => state.rootReducer.campagnie);

  return (
    <Content style={{ padding: '5px', backgroundColor: "white", height: '550px' }}>

      <PageHeader
        style={{
          border: '6px solid rgb(235, 237, 240)',
        }}
        avatar={{ src: 'https://www.elitehelse.com/wp-content/uploads/2020/04/70-512.png' }}
        title=" Listes des Campagnies "
      />
      <div>
        <Space size="large">
          <HeaderSearch
            bordered
            placeholder="Chercher"
            style={{
              width: '300px',
              webkittransition: "width 0.4s ease-in-out",
              transition: "width 0.4s ease-in-out",
            }}
          />
          <Popover content={PopupAjout} trigger="click">

            <button style={{ backgroundColor: "ghostwhite", color: "black ", borderColor: "ghostwhite", marginLeft: '2076%', marginTop: '70%', marginBottom: '70%', paddingInline: '5px' }}> Ajouter </button>
          </Popover>
        </Space>
      </div>
      {campagnies? 
      <Table
        bordered
        dataSource={
          campagnies.map(v => { 
            return {
              width: '25%',
              title : v.lib,
              adress : v.adress,
              tel : v.numTel,
              email : v.email,
              fax : v.fax,
            }
          })  }
        columns={columns}
      />
      : <soan>loading ... </soan>
    }

    </Content>

  )
}
export default Campagnie

