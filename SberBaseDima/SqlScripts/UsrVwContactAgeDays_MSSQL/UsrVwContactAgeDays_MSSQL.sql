IF EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[UsrVwContactAgeDays]'))
DROP VIEW [dbo].UsrVwContactAgeDays
go
create view dbo.UsrVwContactAgeDays as
 select Id as UsrId, Name as UsrName, 
 BirthDate as UsrBirthDate, 
 DATEDIFF(DD, BirthDate, GETDATE()) as UsrAgeDays from Contact
go
