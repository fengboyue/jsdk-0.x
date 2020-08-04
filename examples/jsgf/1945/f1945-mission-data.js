/**
 * @project JSDK: JavaScript Development Kit
 * @copyright Copyright (c) 2004-2012, Dragonfly.org. All rights reserved.
 * @license LGPLv3
 * 
 * @version 0.2
 * @author fengchun
 * @email f15_nsm@hotmail.com
 * @date 2011-03-08
 * @date 2011-03-22
 */
PKG1945.MissionData = [
	new PKG1945.Mission({
		ships:{
			time_55:[{
				name:'submarine',x:100,y:300
			}],
			time_56:[{
				name:'submarine',x:180,y:200
			}],
			time_60:[{
				name:'submarine',x:360,y:100
			}]			
		},
		fighters:{
			time_30:[{
				name:'a5m_1',x:0,y:0,dir:MT.RADIAN_2,motion:'line'
			},{
				name:'a5m_1',x:33,y:33,dir:MT.RADIAN_2,motion:'line'
			},{
				name:'a5m_1',x:66,y:66,dir:MT.RADIAN_2,motion:'line'
			},{
				name:'a5m_1',x:99,y:99,dir:MT.RADIAN_2,motion:'line'
			}],
			time_60:[{
				name:'a5m_2',x:350,y:128,motion:'round'
			}],	
			time_70:[{
				name:'a5m_2',x:350,y:128,motion:'round'
			}],
			time_80:[{
				name:'a5m_2',x:350,y:128,motion:'round'
			}],	
			time_90:[{
				name:'a5m_2',x:350,y:128,motion:'round'
			}],		
			time_110:[{
				name:'a5m_3',x:448,y:100,dir:MT.RADIAN_8,motion:'line'
			},{
				name:'a5m_3',x:382,y:100,dir:MT.RADIAN_8,motion:'line'
			},{
				name:'a5m_3',x:316,y:100,dir:MT.RADIAN_8,motion:'line'
			},{
				name:'a5m_3',x:250,y:100,dir:MT.RADIAN_8,motion:'line'
			}],		
			time_150:[{
				name:'a5m_4',x:448,y:0,dir:MT.RADIAN_6,motion:'line'
			},{
				name:'a5m_4',x:415,y:33,dir:MT.RADIAN_6,motion:'line'
			},{
				name:'a5m_4',x:382,y:66,dir:MT.RADIAN_6,motion:'line'
			},{
				name:'a5m_4',x:349,y:99,dir:MT.RADIAN_6,motion:'line'
			}],		
			time_190:[{
				name:'a5m_5',x:348,y:0,dir:MT.RADIAN_4,motion:'line'
			},{
				name:'a5m_5',x:248,y:0,dir:MT.RADIAN_4,motion:'line'
			},{
				name:'a5m_5',x:148,y:0,dir:MT.RADIAN_4,motion:'line'
			},{
				name:'a5m_5',x:48,y:0,dir:MT.RADIAN_4,motion:'line'
			}]
		},
		boss:{
			name:'cruiser',x:260,y:30
		},
		map_data: [//关卡地图
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,9,10,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,5,6,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,7,8,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,9,10,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,5,6,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,7,8,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,3,4,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,9,10,0,0,0,0,9,10,0,0,0,0,0]
			,[0,0,0,11,12,0,0,0,0,11,12,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,9,10,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		]
	}),
	new PKG1945.Mission({
		ships:{
			time_40:[{
				name:'submarine',x:60,y:100
			},{
				name:'submarine',x:350,y:100
			}]	
		},
		fighters:{
			time_90:[{
				name:'a6m',x:60,y:200
			},{
				name:'a5m_1',x:0,y:0,dir:MT.RADIAN_2,motion:'line'
			},{
				name:'a5m_1',x:33,y:33,dir:MT.RADIAN_2,motion:'line'
			},{
				name:'a5m_1',x:66,y:66,dir:MT.RADIAN_2,motion:'line'
			},{
				name:'a5m_1',x:99,y:99,dir:MT.RADIAN_2,motion:'line'
			}],
			time_20:[{
				name:'a6m',x:190,y:150
			},{
				name:'a5m_1',x:125,y:50,motion:'round'
			}],	
			time_30:[{
				name:'a5m_2',x:125,y:50,motion:'round'
			}],
			time_40:[{
				name:'a5m_3',x:125,y:50,motion:'round'
			}],	
			time_50:[{
				name:'a5m_4',x:125,y:50,motion:'round'
			}],	
			time_60:[{
				name:'a5m_5',x:125,y:50,motion:'round'
			}],		
			time_150:[{
				name:'a6m',x:350,y:200
			},{
				name:'a5m_3',x:448,y:100,dir:MT.RADIAN_8,motion:'line'
			},{
				name:'a5m_3',x:382,y:100,dir:MT.RADIAN_8,motion:'line'
			},{
				name:'a5m_3',x:316,y:100,dir:MT.RADIAN_8,motion:'line'
			},{
				name:'a5m_3',x:250,y:100,dir:MT.RADIAN_8,motion:'line'
			}],		
			time_120:[{
				name:'a5m_4',x:448,y:0,dir:MT.RADIAN_6,motion:'line'
			},{
				name:'a5m_4',x:415,y:33,dir:MT.RADIAN_6,motion:'line'
			},{
				name:'a5m_4',x:382,y:66,dir:MT.RADIAN_6,motion:'line'
			},{
				name:'a5m_4',x:349,y:99,dir:MT.RADIAN_6,motion:'line'
			}],		
			time_80:[{
				name:'a5m_5',x:348,y:0,dir:MT.RADIAN_4,motion:'line'
			},{
				name:'a5m_5',x:248,y:0,dir:MT.RADIAN_4,motion:'line'
			},{
				name:'a5m_5',x:148,y:0,dir:MT.RADIAN_4,motion:'line'
			},{
				name:'a5m_5',x:48,y:0,dir:MT.RADIAN_4,motion:'line'
			}]
		},
		boss:{
			name:'a7m',x:180,y:30
		},
		map_data: [//关卡地图
			[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,9,10,0,3,4,0,9,10,0,0,0,0,0]
			,[0,0,0,11,12,0,0,0,0,11,12,0,0,0,0,0]
			,[0,0,0,0,0,0,0,9,10,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,11,12,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,3,4,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,9,10,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,11,12,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,5,6,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,7,8,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,5,6,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,7,8,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,1,2,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,9,10,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,11,12,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			,[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		]
	})	
];