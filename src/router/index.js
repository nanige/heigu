import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/Login'
const Login = () => import('@/pages/Login') // 登录页
const Backpsw = () => import('@/pages/Backpsw') // 找回密码页
const Registe = () => import('@/pages/Registe') // 注册
const Index = () => import('@/pages/Index') // 首页
const SeckillList = () => import('@/pages/SeckillList') // 秒杀
const SeckillDetails = () => import('@/pages/SeckillDetails') // 秒杀商品详情
const TopList = () => import('@/pages/TopList') // 人气商品列表
const SearchList = () => import('@/pages/SearchList') // 搜索页
const NoticeList = () => import('@/pages/NoticeList') // 公告列表
const Information = () => import('@/pages/Information') // 公告列表
const ProductDetails = () => import('@/pages/ProductDetails') // 商品详情
const CartList = () => import('@/pages/CartList') // 商品列表
const AddressList = () => import('@/pages/AddressList') // 收货地址列表
const AddAddress = () => import('@/pages/AddAddress') // 添加收货地址
const CouponList = () => import('@/pages/CouponList') // 卡券列表
const SubmitOrder = () => import('@/pages/SubmitOrder') // 提交订单
const HelpCenter = () => import('@/pages/HelpCenter') // 帮助中心
const CompanyProfile = () => import('@/pages/CompanyProfile') // 公司简介
const SetUpThe = () => import('@/pages/SetUpThe') // 公司简介
const SetTradPsw = () => import('@/pages/SetTradPsw') // 设置交易密码
const ModifyTradPsw = () => import('@/pages/ModifyTradPsw') // 设置交易密码
const ModifyLoginPsw = () => import('@/pages/ModifyLoginPsw') // 设置登录密码
const MemberInfo = () => import('@/pages/MemberInfo') // 会员信息
const My = () => import('@/pages/My') // 我
const WithdrawalRecord = () => import('@/pages/WithdrawalRecord') // 提现记录
const Withdrawal = () => import('@/pages/Withdrawal') // 现金提现
const MyBill = () => import('@/pages/MyBill') // 我的账单
const MyFocus = () => import('@/pages/MyFocus') // 我的关注
const ServiceDetails = () => import('@/pages/ServiceDetails') // 服务单详情
const ApplyRecord = () => import('@/pages/ApplyRecord') // 申请记录
const AfterSalesService = () => import('@/pages/AfterSalesService') // 售后服务
const InviteFriends = () => import('@/pages/InviteFriends') // 邀请好友
const ActivityRules = () => import('@/pages/ActivityRules') // 活动细则
const InvitedRecord = () => import('@/pages/InvitedRecord') // 邀请记录
const RewardList = () => import('@/pages/RewardList') // 邀请奖励
const MyOrder = () => import('@/pages/MyOrder') // 我的订单
const OrderDetails = () => import('@/pages/OrderDetails') // 订单详情
const Logistics = () => import('@/pages/Logistics') // 查看物流
const Heiguzixun = () => import('@/pages/Heiguzixun') // 黑谷资讯
const Heigugonggao = () => import('@/pages/Heigugonggao') // 黑谷公告
const Bangzhuxiangqing = () => import('@/pages/Bangzhuxiangqing') // 帮助详情
const A404 = () => import('@/pages/A404') // 404
const A505 = () => import('@/pages/A505') // 505 

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/backpsw',
      name: 'backpsw',
      component: Backpsw
    },
    {
      path: '/registe',
      name: 'registe',
      component: Registe
    },
    {
      path: '/seckillList',
      name: 'seckillList',
      component: SeckillList
    },
    {
      path: '/seckillDetails',
      name: 'seckillDetails',
      component: SeckillDetails
    },
    {
      path: '/topList',
      name: 'topList',
      component: TopList
    },
    {
      path: '/searchList',
      name: 'searchList',
      component: SearchList
    },
    {
      path: '/noticeList',
      name: 'noticeList',
      component: NoticeList
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: ProductDetails
    },
    {
      path: '/cartList',
      name: 'cartList',
      component: CartList
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: AddressList
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      component: AddAddress
    },
    {
      path: '/couponList',
      name: 'couponList',
      component: CouponList
    },
    {
      path: '/submitOrder',
      name: 'submitOrder',
      component: SubmitOrder
    },
    {
      path: '/helpCenter',
      name: 'helpCenter',
      component: HelpCenter
    },
    {
      path: '/companyProfile',
      name: 'companyProfile',
      component: CompanyProfile
    },
    {
      path: '/setUpThe',
      name: 'setUpThe',
      component: SetUpThe
    },
    {
      path: '/setTradPsw',
      name: 'setTradPsw',
      component: SetTradPsw
    },
    {
      path: '/modifyTradPsw',
      name: 'modifyTradPsw',
      component: ModifyTradPsw
    },
    {
      path: '/modifyLoginPsw',
      name: 'modifyLoginPsw',
      component: ModifyLoginPsw
    },
    {
      path: '/memberInfo',
      name: 'memberInfo',
      component: MemberInfo
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/withdrawalRecord',
      name: 'withdrawalRecord',
      component: WithdrawalRecord
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: Withdrawal
    },
    {
      path: '/myBill',
      name: 'myBill',
      component: MyBill
    },
    {
      path: '/myFocus',
      name: 'myFocus',
      component: MyFocus
    },
    {
      path: '/serviceDetails',
      name: 'serviceDetails',
      component: ServiceDetails
    },
    {
      path: '/applyRecord',
      name: 'applyRecord',
      component: ApplyRecord
    },
    {
      path: '/afterSalesService',
      name: 'afterSalesService',
      component: AfterSalesService
    },
    {
      path: '/inviteFriends',
      name: 'inviteFriends',
      component: InviteFriends
    },
    {
      path: '/activityRules',
      name: 'activityRules',
      component: ActivityRules
    },
    {
      path: '/invitedRecord',
      name: 'invitedRecord',
      component: InvitedRecord
    },
    {
      path: '/rewardList',
      name: 'rewardList',
      component: RewardList
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: MyOrder
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: OrderDetails
    },
    {
      path: '/logistics',
      name: 'logistics',
      component: Logistics
    },
    {
      path: '/heiguzixun',
      name: 'heiguzixun',
      component: Heiguzixun
    },
    {
      path: '/heigugonggao',
      name: 'heigugonggao',
      component: Heigugonggao
    },
    {
      path: '/bangzhuxiangqing',
      name: 'bangzhuxiangqing',
      component: Bangzhuxiangqing
    },
    {
      path: '/a404',
      name: 'a404',
      component: A404
    },
    {
      path: '/a505',
      name: 'a505',
      component: A505
    }
  ]
})
